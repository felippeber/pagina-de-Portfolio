
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/felippeber/P-gina-de-Portfolio/master/assets/data/profile.json?token=GHSAT0AAAAAACCGBMJLERPKIRJR5JYOOQ3GZCUBGCQ'
    const fetching = await fetch(url)
    return await fetching.json()
}