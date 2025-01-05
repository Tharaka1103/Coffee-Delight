import { NextResponse } from 'next/server';
import pool from '@/app/lib/db';
import { comparePasswords, generateToken } from '@/app/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Get user from database
    const [users] = await pool.execute<any[]>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    const user = users[0];

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Verify password
    const isValid = await comparePasswords(password, user.password);

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Generate token
    const token = generateToken(user.id);

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
