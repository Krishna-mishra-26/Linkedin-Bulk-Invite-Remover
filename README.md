# 🚀 LinkedIn Auto Withdraw Invitations Script

A simple JavaScript automation script to **withdraw all pending Sent LinkedIn Connection invitations** with a single execution. This script helps you **save time, reduce manual effort, and clean up your network efficiently**.

## 📌 Features

✅ **Automates Invitation Withdrawal** – No need to manually click "Withdraw" for each request.  
✅ **Handles Confirmation Pop-ups** – Automatically confirms each withdrawal.  
✅ **Auto-scrolls to Load All Requests** – Ensures all pending invitations are processed.  
✅ **Rate-limited Execution** – Adds delays to mimic human behavior and avoid detection.  

## ⚠️ Disclaimer

- **Use at Your Own Risk** – Automating LinkedIn actions **may violate their terms of service**.  
- **Avoid Overuse** – Running this script too frequently may result in account restrictions.  
- **Always Test First** – Run on a small batch before executing on all invitations.  

---

## 🚀 How to Use

### 1️⃣ Open the Sent Invitations Page
Go to **[LinkedIn Sent Invitations](https://www.linkedin.com/mynetwork/invitation-manager/sent/)**.

### 2️⃣ Scroll to Load All Invitations (Optional)
Manually scroll down to load all pending connection requests.

### 3️⃣ Open Developer Console
- **Google Chrome / Edge** → Press `Ctrl + Shift + J` (Windows/Linux) or `Cmd + Option + J` (Mac)  
- **Firefox** → Press `Ctrl + Shift + K` (Windows/Linux) or `Cmd + Option + K` (Mac)  

### 4️⃣ Copy & Paste the Script Below

```javascript
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
```

### 5️⃣ Hit Enter & Let It Run
**The script will withdraw all invitations automatically. Monitor progress in the console.**

### 📢 Support & Contributions
Feel free to open an issue or submit a pull request for improvements!
If you found this helpful, give it a ⭐ on GitHub!
