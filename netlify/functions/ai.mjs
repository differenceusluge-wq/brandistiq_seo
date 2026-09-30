import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async (req) => {
  if (req.method !== "POST") return new Response("Method Not Allowed",{status:405});
  try {
    const body = await req.json();
    const message = String(body?.message || "").trim();
    if (!message) return Response.json({reply:"Napišite pitanje."},{status:400});
    if (!process.env.OPENAI_API_KEY) return Response.json({reply:"AI demo nije još aktiviran. Na Netlifyju dodajte varijablu OPENAI_API_KEY i ponovno objavite projekt."},{status:503});
    const response = await client.responses.create({
      model: "gpt-5-mini",
      instructions: "Ti si BrandistiQ AI asistent. Odgovaraj na hrvatskom jeziku, kratko i korisno. Pomažeš korisniku razumjeti koje digitalno rješenje mu treba: web stranica, web aplikacija, kalkulator, AI asistent, AI agent, automatizacija ili SEO. Ne obećavaj točnu cijenu; za cijene koristi početne vrijednosti BrandistiQ-a: landing 150 €, poslovna web 200 €, SEO web 250 €, napredna web 350 €, web shop 500 €, web aplikacija 600 €, napredna aplikacija 900 €, AI rješenje 400 €. Napomeni da je konačna cijena prema opsegu. Ako korisnik želi ponudu, uputi ga na /kontakt/.",
      input: message
    });
    return Response.json({reply: response.output_text || "Nisam uspio sastaviti odgovor. Pokušajte ponovno."});
  } catch (e) {
    return Response.json({reply:"Došlo je do greške u AI servisu. Pokušajte ponovno za trenutak."},{status:500});
  }
};
export const config = { path: "/api/ai" };
