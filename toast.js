function showToast(message, type) {
    const colors = {
        success: 'linear-gradient(135deg, #00b09b, #96c93d)',
        error: 'linear-gradient(135deg, #ff4444, #cc0000)',
        warning: 'linear-gradient(135deg, #FF3D00, #FFD600)'
    };

    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️'
    };

    const toast = document.createElement('div');
    toast.innerHTML = `${icons[type]} ${message}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        font-family: 'Poppins', sans-serif;
    `;

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}