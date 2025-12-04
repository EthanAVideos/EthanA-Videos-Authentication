<script>
document.addEventListener("DOMContentLoaded", async () => {
    // URL to your auth.json — adjust if not in the same folder
    const authURL = "/auth.json";

    // Detect the current domain
    const domain = window.location.hostname;

    try {
        const res = await fetch(authURL, { cache: "no-store" }); // always re-fetch
        if (!res.ok) throw new Error("Failed to load auth.json");

        const auth = await res.json();

        // Check domain:
        if (auth[domain] && auth[domain].value === "1") {
            // Allowed → do nothing
            return;
        }

        // Not allowed (value=0 OR domain not present)
        blockAccess();

    } catch (err) {
        console.error("Auth check failed:", err);
        blockAccess();
    }

    function blockAccess() {
        // Hide all page content
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
        <a>Learn why you can't access this page</a>
        </div>
        </center>
        `;
    }
});
</script>
