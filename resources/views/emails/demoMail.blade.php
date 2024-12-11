<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles de tu cuenta</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        h1 {
            color: #4CAF50;
            text-align: center;
        }

        h3 {
            color: #555;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 5px;
        }

        p {
            margin: 10px 0;
        }

        a {
            color: #4CAF50;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            text-decoration: underline;
        }

        .credentials {
            background: #f9f9f9;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <h1>Bienvenido, {{ $mailData['name'] }}</h1>
        <p>Tu cuenta se ha creado satisfactoriamente en <strong>EcoBitácora</strong>.</p>
        <h3>Tus credenciales</h3>
        <div class="credentials">
            <p><strong>Email:</strong> {{ $mailData['email'] }}</p>
            <p><strong>Password:</strong> {{ $mailData['password'] }}</p>
        </div>
        <p>Te recomendamos encarecidamente que cambies tu contraseña haciendo clic
            <a href="https://elvis.informaticamajada.es/forgot-password">aquí</a>.
        </p>
        <p class="footer">Gracias por unirte a EcoBitácora. © 2024</p>
    </div>
</body>

</html>
