function validacion()
    {
      const forms = document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach(form => {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        }else
        {
          const toastLiveExample = document.getElementById('liveToast');
          const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
          toastBootstrap.show()
          form.classList.remove('was-validated')
          document.getElementById("formulario").reset();
        }
      })
    }