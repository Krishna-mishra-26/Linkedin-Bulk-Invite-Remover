(async () => {
    console.log("🔄 Starting LinkedIn Withdraw Automation...");

    while (true) {
        let withdrawButtons = document.querySelectorAll('button[aria-label^="Withdraw"]');

        if (withdrawButtons.length === 0) {
            console.log("✅ No more invitations to withdraw.");
            break;
        }

        for (let button of withdrawButtons) {
            button.click(); // Click the first "Withdraw" button
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for pop-up

            let confirmButton = document.querySelector('.artdeco-button--primary'); // Confirm withdraw
            if (confirmButton) {
                confirmButton.click(); // Click withdraw in pop-up
                console.log("✅ Invitation withdrawn.");
                await new Promise(resolve => setTimeout(resolve, 2000)); // Wait to avoid detection
            }
        }

        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait before checking again
    }

    console.log("🎉 All invitations have been withdrawn successfully!");
})();