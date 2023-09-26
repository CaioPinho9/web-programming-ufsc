const olaTchau = () => {
    console.log("Olá")
    setTimeout(() => console.log("Tchau"), 2000)
}
olaTchau()


const olaETchau = () => {
    setTimeout(() => console.log("Tchau"), 2000)
    console.log("Olá")
}
olaETchau()

// Ambos estão corretos