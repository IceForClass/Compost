<!DOCTYPE html>
<html>

<head>
    <title>Your Account Details</title>
</head>

<body>
    <h1>Bienvenido, {{ $mailData['name'] }}</h1>
    <p>Tu cuenta se ha creado satisfactoriamente en EcoBitácora</p>
    <h3>Tus credenciales</h3>
    <p><strong>Email:</strong> {{ $mailData['email'] }}</p>
    <p><strong>Password:</strong> {{ $mailData['password'] }}</p>
    <p>Te recomenamos encarecidamente que cambies tu contraseña pinchando <a
            href="https://elvis.informaticamajada.es/forgot-password">aqui</a></p>
</body>

</html>
