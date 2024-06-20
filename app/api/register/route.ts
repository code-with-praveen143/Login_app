import { NextRequest, NextResponse } from 'next/server';
import getConnection from '@/utils/db';
import sql from 'mssql'

export async function POST(req: NextRequest){
    if (req.method === 'POST') {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('select * from login');
    console.log(result);
    return NextResponse.json({message: "User registered Successfully...", result}, {status:200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({message:"Error ocurred"},{status:500});
  }
}
else{
  return NextResponse.json({message:'Method Not Allowed'},{status:404});
}
};

