import { NextResponse } from 'next/server';
import pool from '@/app/lib/db';
import { hashPassword, generateToken } from '@/app/lib/auth';
import { ResultSetHeader } from 'mysql2';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password } = await request.json();

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Insert user into database with correct column names
    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, hashedPassword]
    );

    // Generate token
    const token = generateToken(result.insertId);

    return NextResponse.json({ 
      token,
      user: {
        id: result.insertId,
        firstName,
        lastName,
        email
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}