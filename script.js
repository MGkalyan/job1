document.getElementById('filter-btn').addEventListener('click', function () {
    const titleFilter = document.getElementById('job-title').value.toLowerCase();
    const locationFilter = document.getElementById('job-location').value.toLowerCase();
    const companyFilter = document.getElementById('company').value.toLowerCase();
  
    const jobs = document.querySelectorAll('.job');
  
    jobs.forEach(job => {
      const title = job.dataset.title.toLowerCase();
      const location = job.dataset.location.toLowerCase();
      const company = job.dataset.company.toLowerCase();
  
      // Check if job matches the filters
      if (
        (titleFilter === '' || title.includes(titleFilter)) &&
        (locationFilter === '' || location.includes(locationFilter)) &&
        (companyFilter === '' || company.includes(companyFilter))
      ) {
        job.style.display = 'block'; // Show matching job
      } else {
        job.style.display = 'none'; // Hide non-matching job
      }
    });
  });
  