import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, details } = await req.json();

    const RECIPIENT_EMAIL = "rkrokhanna@gmail.com";
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");

    // Send email notification using Lovable AI to compose and Supabase's built-in email
    // We'll use a simple fetch to send via a transactional approach
    // For now, use Resend-compatible approach or log + notify

    // Attempt to send email via Resend if API key is available
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (RESEND_API_KEY) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Contact Form <onboarding@resend.dev>",
          to: [RECIPIENT_EMAIL],
          subject: `New Contact: ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Details:</strong> ${details || "No details provided"}</p>
            <p><em>Submitted at ${new Date().toISOString()}</em></p>
          `,
        }),
      });

      const emailData = await emailRes.json();
      console.log("Email sent:", emailData);
    } else {
      console.log("RESEND_API_KEY not configured. Contact submission logged:", { name, phone, details });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
