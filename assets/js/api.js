async function fatghProfileDate() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json'
    const fetghing = await fetch(url)
    return await fetghing.json()
}