import '../assets/css/Root.css'

export default function Root(){
    return(
        <>
        <div className="main">
            <h1>Publish your passions, your way</h1>
            <p>Create a unique and beautiful blog easily.</p>
            <button style={{
                textTransform: "uppercase",
                padding: ".875rem 1.25rem",
                border: "none",
                backgroundColor: "#ff9224",
                color: "rgb(255, 255, 255)",
                borderRadius: "4px",
                fontWeight: '700',
                height: '50px',
                fontSize: '.8rem',
            }}>Create Your Blog</button>
        </div>
        </>
    )
}