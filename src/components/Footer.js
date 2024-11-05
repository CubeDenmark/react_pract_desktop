export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#f8f8f8', padding: '10px 0', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <nav>
                <a href="#home" style={{ margin: '0 15px' }}>Home</a>
                <a href="#about" style={{ margin: '0 15px' }}>About</a>
                <a href="#contact" style={{ margin: '0 15px' }}>Contact</a>
            </nav>
            <div style={{ marginTop: '10px' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> |
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </div>
        </footer>
    );
}
