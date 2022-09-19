const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const addedLatency = 2000;

app.use(cors())

// https://abordage.com/fine-ship-models/americas-cup-boats/
app.get('/products', (req, res) => {   
  setTimeout(() => {

    res.send([
      {
        id: "000001",
          name: "AC 75 INEOS TEAM UK desk model 2021 MN-A102",
          description: 'New Arrival ! Shop one of our latest desk model of the 36th  America`s Cup, the gorgeous AC 75 INEOS TEAM UK desk model 2021 MN-A102 built at scale 1/100 or 9 inches LOA. <ul><li>AC 75 INEOS TEAM UK desk model, scale 1/100 or 9 inches LOA.</li><li>Base dimensions are 10" L x 4.5" W</li><li>Display case dimensions 10.25" L x 4.75" W x 13.5" H"</li></ul>',
          price: {
            sale: 395 
          },
          images: [
            "https://abordage.com/6137-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            "https://abordage.com/6138-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            "https://abordage.com/6139-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            "https://abordage.com/6140-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            "https://abordage.com/6141-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6142-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6143-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6144-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6145-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6146-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6147-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            ]
          },
          {
            id: "000002",
            name: "AC 75 Te Rehutai Emirates Team New Zealand desk model 2021 MN-A101",
            description: 'New Arrival ! Shop one of our latest desk model of the 36th  America`s Cup, the gorgeous AC 75 INEOS TEAM UK desk model 2021 MN-A102 built at scale 1/100 or 9 inches LOA. <ul><li>AC 75 INEOS TEAM UK desk model, scale 1/100 or 9 inches LOA.</li><li>Base dimensions are 10" L x 4.5" W</li><li>Display case dimensions 10.25" L x 4.75" W x 13.5" H"</li></ul>',
            price: {
              sale: 395 
            },
            images: [
              "https://abordage.com/5978-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5979-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5980-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5981-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5982-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5983-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5984-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5985-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5986-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
            ]
          }
        ])
      }, addedLatency)
})

app.get('/products/000001', (req, res) => {   
  setTimeout(() => {

    res.send([
      {
        id: "000001",
          name: "AC 75 INEOS TEAM UK desk model 2021 MN-A102",
          description: 'New Arrival ! Shop one of our latest desk model of the 36th  America`s Cup, the gorgeous AC 75 INEOS TEAM UK desk model 2021 MN-A102 built at scale 1/100 or 9 inches LOA. <ul><li>AC 75 INEOS TEAM UK desk model, scale 1/100 or 9 inches LOA.</li><li>Base dimensions are 10" L x 4.5" W</li><li>Display case dimensions 10.25" L x 4.75" W x 13.5" H"</li></ul>',
          price: {
            sale: 395 
          },
          images: [
            "https://abordage.com/6137-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            "https://abordage.com/6138-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            "https://abordage.com/6139-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            "https://abordage.com/6140-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            "https://abordage.com/6141-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6142-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6143-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6144-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6145-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6146-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
              "https://abordage.com/6147-thickbox_default/ac-75-ineos-team-uk-desk-model-2021-mn-a102.jpg",
            ]
          }
        ])
      }, addedLatency)
})


app.get('/products/000002', (req, res) => {   
  setTimeout(() => {

    res.send([
          {
            id: "000002",
            name: "AC 75 Te Rehutai Emirates Team New Zealand desk model 2021 MN-A101",
            description: 'New Arrival ! Shop one of our latest desk model of the 36th  America`s Cup, the gorgeous AC 75 INEOS TEAM UK desk model 2021 MN-A102 built at scale 1/100 or 9 inches LOA. <ul><li>AC 75 INEOS TEAM UK desk model, scale 1/100 or 9 inches LOA.</li><li>Base dimensions are 10" L x 4.5" W</li><li>Display case dimensions 10.25" L x 4.75" W x 13.5" H"</li></ul>',
            price: {
              sale: 395 
            },
            images: [
              "https://abordage.com/5978-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5979-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5980-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5981-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5982-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5983-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5984-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5985-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
              "https://abordage.com/5986-thickbox_default/ac-75-te-rehutai-emirates-team-new-zealand-desk-model-2021-mn-a101-scale-1100-or-9-inches-loa.jpg",
            ]
          }
        ])
      }, addedLatency)
})




app.get('/', (req, res) => {   
  setTimeout(() => {
    res.send([])
  }, addedLatency)
})

app.get('/test', (req, res) => {   
  setTimeout(() => {
    res.send({
      title: "hallo world"
    })
  }, addedLatency)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})