document.addEventListener("DOMContentLoaded", async () => {
    // URL to your auth.json — adjust path if needed
    const authURL = "https://raw.githubusercontent.com/EthanAVideos/EthanA-Videos-Authentication/refs/heads/main/auth.json";

    // MANUALLY set the domain here:
    const domain = "ethan.arm64server.org";  // ← change this

    try {
        const res = await fetch(authURL, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load auth.json");

        const auth = await res.json();

        // Check domain authorization
        if (auth[domain] && auth[domain].value === "1") {
            return; // Authorized → do nothing
        }

        // Not authorized
        blockAccess();

    } catch (err) {
        console.error("Auth check failed:", err);
        blockAccess();
    }

    function blockAccess() {
        document.body.innerHTML = `
            <div style="
                padding:20px;
                font-family: Arial, sans-serif;
                color: red;
                text-align: center;
                font-size: 24px;
                margin-top: 40px;
            ">
                <b>EAV Authentication Failed!</b><br><br>
                EAV Auth disabled this site; contact the admin.<br><br><br><br>
                <b>What Is EAV Auth?</b><br>
                The Developer has implemented a Work Protection System.
            </div>
            <center>
                <div style=" background-color: gray; width: 100%; height: 35px; position: fixed; left: 0; bottom: 0; ">
                    <a href="https://github.com/EthanAVideos/EthanA-Videos-Authentication/blob/main/README.md">Learn why you can't access this page</a>
                </div>
            </center>
        `;
    }
});

