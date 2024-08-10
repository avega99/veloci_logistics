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

  const bodyMessage = `
      <strong>Nombre:</strong> ${name}<br> Correo: ${email}<br> Número de teléfono: ${phone}<br> Mensaje: ${message}
    `

  console.log({ message, phone, name, lastname, email })

  Email.send({
    SecureToken: '3fb48269-7aab-44b7-ac98-63818546746c',
    To: 'alejandrovegaaguillon99@gmail.com',
    From: 'alejandrovegaaguillon99@gmail.com',
    Subject: 'CONTACTO',
    Body: bodyMessage,
  })
    .then((message) => {
      if (message == 'OK') {
        Swal.fire({
          title: 'Good job!',
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
