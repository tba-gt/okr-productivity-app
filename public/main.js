const update_button = document.getElementById('update-button');

update_button.addEventListener('click', () => {
    // PUT request: fetch(endpoint, options)
    fetch('/okrs', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            okr: 'apple'
        })
    });
});