export const doughtnutPropierties = (data) => {
    var doughnutItemsCount = {
        creacion: 0,
        fix: 0,
        alkosto: 0,
        farmashop: 0,
    }
    data.map(scenario => {
        scenario.Proyecto === "Alkosto" ? doughnutItemsCount.alkosto++ : doughnutItemsCount.farmashop++
        scenario.Tipo === "Creacion" ? doughnutItemsCount.creacion++ : doughnutItemsCount.fix++
    })


    return [
        {
            name: "Scenarios",
            datasets: [
                {
                data: [doughnutItemsCount.creacion, doughnutItemsCount.fix],
                backgroundColor: ['#e17100', '#282a2d']
                }
                ],
                labels: [ "Creados", "Fix" ],
        },
        {
            name: "Proyecto",
            datasets: [
                {
                data: [doughnutItemsCount.farmashop, doughnutItemsCount.alkosto],
                backgroundColor: ['#e17100', '#282a2d']
                }
                ],
                labels: ["Farmashop", "Alkosto"],
        }
    ]
}