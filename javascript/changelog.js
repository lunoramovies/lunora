async function showChangelog() {
    const container = document.getElementById('changelogContent');
    container.innerHTML = 'Loading...';
  
    try {
      const res = await fetch('https://api.github.com/repos/lunoramovies/lunora/commits?sha=main');
      const commits = await res.json();
  
      if (!commits.length) {
        container.innerHTML = 'No changes found.';
        return;
      }
  
      const html = commits.slice(0, 10).map((commit, i) => {
        const msg = commit.commit.message;
        const short = msg.slice(0, 100);
        const long = msg.length > 100;
  
        return `
          <div class="feature-card min-w-[300px] bg-gray-900 border border-gray-800 p-6 rounded-xl shadow flex flex-col items-start transition-all duration-300">
            <h3 class="font-semibold text-lg mb-2">#${commits.length - i}</h3>
            <p class="text-sm text-gray-300 mb-2" id="msg-${i}">
              ${long ? `<span class="short">${short}</span><span class="dots">...</span><span class="more hidden">${msg.slice(100)}</span>` : msg}
            </p>
            <p class="text-xs text-gray-500 mb-4">${new Date(commit.commit.author.date).toLocaleDateString()} — ${commit.commit.author.name}</p>
            ${long ? `<button onclick="toggleReadMore(${i})" class="text-indigo-400 hover:underline text-sm">Read More</button>` : ''}
          </div>
        `;
      }).join('');
  
      container.innerHTML = html;
    } catch (err) {
      console.error(err);
      container.innerHTML = 'Error loading changelog.';
    }
  }
  
  function toggleReadMore(index) {
    const p = document.getElementById(`msg-${index}`);
    const dots = p.querySelector('.dots');
    const more = p.querySelector('.more');
    const btn = p.nextElementSibling;
  
    more.classList.toggle('hidden');
    dots.classList.toggle('hidden');
  
    // Make the card grow vertically
    const card = p.closest('.feature-card');
    card.classList.toggle('items-start');
  
    btn.textContent = btn.textContent === 'Read More' ? 'Show Less' : 'Read More';
  }
  
  showChangelog();