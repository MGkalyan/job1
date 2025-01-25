document.getElementById('generate-resume-btn').addEventListener('click', function () {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value.split(',');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
  
   
    const resumeContent = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h4>Summary</h4>
      <p>${summary}</p>
      <h4>Skills</h4>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
      <h4>Experience</h4>
      <p>${experience}</p>
      <h4>Education</h4>
      <p>${education}</p>
    `;
  
    
    document.getElementById('resume-output').innerHTML = resumeContent;
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('resume-section').style.display = 'block';
  });
  
  document.getElementById('back-btn').addEventListener('click', function () {
  
    document.getElementById('resume-form').reset();
    document.getElementById('resume-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'block';
  });
  