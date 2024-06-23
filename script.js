const copyText=document.getElementById("copyable-text");
copyText.addEventListener("click", function() {
    const textToCopy=copyText.textContent;
    const originalText=textToCopy;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(()=>{
            copyText.textContent="Email copied!";
            setTimeout(()=>{
                copyText.textContent=originalText;
            }, 2000);
        }, ()=>{
            copyText.textContent="Copying to clipboard failed!";
        });
    } else {
        const textArea=document.createElement("textarea");
        textArea.value=textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        copyText.textContent="Email copied!(fallback method)";
        setTimeout(()=>{
            copyText.textContent=originalText;
        }, 2000);
    }
}
);
