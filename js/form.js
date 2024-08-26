// 51F5D4F81A7D5D099177400AF8481A8B2D1B
// 51F5D4F81A7D5D099177400AF8481A8B2D1B

const form = document.querySelector('form')

function sendEmail() {
  const formData = new FormData(form)

  const message = formData.get('message')
  const phone = formData.get('phone')
  const name = formData.get('name')
  const lastname = formData.get('lastname')
  const email = formData.get('email')
  const subject = formData.get('subject')

  const bodyMessage = `
      <strong>Nombre:</strong> ${name} ${lastname}<br> Correo: ${email}<br> Número de teléfono: ${phone}<br> Mensaje: ${message}
    `

  Email.send({
    SecureToken: '71f1e6e8-6ac3-409e-a045-eb71b660cd82',
    To: 'velocilogistics@gmail.com',
    From: 'velocilogistics@gmail.com',
    Subject: subject,
    Body: bodyMessage,
  })
    .then((message, data) => {
      console.log({ message })
      if (message == 'OK') {
        Swal.fire({
          title: 'Buen trabajo!',
          text: 'Mensaje enviado correctamente!',
          icon: 'success',
        })
        form.reset()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al enviar el mensaje.',
          text: 'Lo sentimos, algo salió mal, por favor íntentelo más tarde',
          //footer: '<a href="#">Why do I have this issue?</a>',
        })
      }
    })
    .catch((error) => {
      console.log({ error })
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al enviar el mensaje.',
        text: 'Lo sentimos, algo salió mal, por favor íntentelo más tarde',
        //footer: '<a href="#">Why do I have this issue?</a>',
      })
    })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  sendEmail()
})
