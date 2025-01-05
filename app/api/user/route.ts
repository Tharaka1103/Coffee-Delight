import { NextResponse } from 'next/server';
import pool from '@/app/lib/db';
import { verifyToken } from '@/app/lib/auth';

export async function GET(request: Request) {
    try {
      const authHeader = request.headers.get('Authorization');
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
  
      const token = authHeader.split(' ')[1];
      const userId = verifyToken(token);
  
      const [users] = await pool.execute<any[]>(
        'SELECT id, firstName, lastName, email FROM users WHERE id = ?',
        [userId]
      );
  
      const user = users[0];
  
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email
      });
    } catch (error) {
      console.error('API Error:', error);
      return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
    }
}
