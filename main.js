document.addEventListener("DOMContentLoaded", function () {
    const verifyButton = document.getElementById("verifyButton");
    const verificationResult = document.getElementById("verificationResult");

    verifyButton.addEventListener("click", () => {
        const certificateCode = document.getElementById("certificateCode").value;

        // Send a request to the backend for verification
        fetch(`/verify?code=${certificateCode}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.valid) {
                    verificationResult.textContent = "Certificate is valid!";
                } else {
                    verificationResult.textContent = "Certificate is not valid.";
                }
            })
            .catch((error) => {
                console.error(error);
                verificationResult.textContent = "Error occurred during verification.";
            });
    });
});


