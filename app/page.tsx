import { sql } from "@/app/lib/db";

async function getData() {
  const response =
    await sql`select * from utilisateurs where utilisateurs.id = 1;`;
  return response[0];
}

export default async function Page() {
  const data = await getData();

  const fname = data.fname;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="uppercase">{fname}</h1>
    </div>
  );
}
