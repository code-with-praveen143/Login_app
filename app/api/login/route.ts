import { NextRequest, NextResponse } from 'next/server';
import getConnection from '@/utils/db';

export async function  POST(req: NextRequest) {

  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM login');
    console.log(result);
    return NextResponse.json({result},{status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({message:"Error ocurred"},{status:500});
  }
};

