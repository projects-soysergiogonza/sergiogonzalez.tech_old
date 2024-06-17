import { getConnection } from "@lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (
  _req: NextApiRequest,
  _res: NextApiResponse,
): Promise<Response> => {
  const connection = await getConnection();

  try {
    const [rows] = await connection.execute("SELECT * FROM Users");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await connection.end();
  }
};

export const POST = async (
  req: NextApiRequest,
  _res: NextApiResponse,
): Promise<Response> => {
  const connection = await getConnection();

  try {
    const [rows] = await connection.execute(
      "INSERT INTO Users (username, password) VALUES (?, ?)",
      [req.body.username, req.body.password],
    );
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await connection.end();
  }
};
