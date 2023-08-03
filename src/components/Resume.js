import "../App.css"

export default function Cert() {
  const resumeURL = process.env.PUBLIC_URL + '/assets/Ratin_Zaman_Resume_IT.pdf';
    return (
      <div id="cert" className='section'>
        <a className="resumeLink" target="_blank"
              rel="noopener noreferrer" href={resumeURL}>→ Download CV</a>
      </div>
    );
}