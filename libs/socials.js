export default async function fetchListOfSocials() {
    try {
        const response = await fetch("http://localhost/artflex-freelancer-animation/api/socials",{
            next: {
                revalidate: 10
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}