export const homeTemplate = `
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <title>API-REST</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                display: flex;
            }

            aside {
                width: 20%;
                position: sticky;
                height: fit-content;
                top: 20px;
            }

            menu {
                margin: 0;
                padding: 0;
            }

            .aside_menu {
                list-style: none;
                margin: 0;
                padding: 0;
                border-color: #115e59;
                border-width: 0 2px 0 0;
                border-style: solid;
            }

            .aside_menu li {
                margin: 10px 0;
                color: #115e59;
                font-weight: bold;
                cursor: pointer;
            }

            a:link,
            a:visited {
                text-decoration: none;
                color: #115e59;
            }
            a:hover {
                text-decoration: none;
            }
            a:active {
                text-decoration: none;
            }
            a:focus {
                text-decoration: none;
            }

            h1 {
                padding: 0;
                margin: 20px 0 0 0;
                color: #115e59;
                text-align: center;
            }

            h2 {
                padding: 0;
                margin: 20px 0 0 0;
                color: #115e59;
            }

            h3 {
                padding: 0;
                margin: 20px 0 0 0;
                color: #115e59;
            }

            h4 {
                padding: 0;
                margin: 0 10px 0 0;
                color: #115e59;
            }

            h5 {
                padding: 0;
                margin: 20px 0 0 0;
                color: #115e59;
            }

            p {
                padding: 0;
                margin: 0;
                color: #363636;
            }

            main {
                margin-left: 30px;
            }

            code {
                color: #363636;
            }

            .apicall {
                display: flex;
                align-items: center;
                margin-top: 15px;
            }

            .apicall h4 {
                color: #a64646;
                margin: 0;
                padding: 0;
                margin: 0 15px 0 0;
            }

            .apicall p {
                color: #363636;
                margin: 0;
                padding: 0;
            }

            abbr {
                text-decoration: none;
                cursor: pointer;
            }

            .types {
                margin-top: 10px;
            }

            .types span {
                display: flex;
                align-items: center;
            }
        </style>
    </head>

    <body>
        <aside>
            <menu>
                <ul class="aside_menu">
                    <h1>API REST</h1>
                    <li><a href="#description">Descrição</a></li>
                    <li><a href="#userlist">Lista de usuários</a></li>
                    <li><a href="#user">Listar um usuário</a></li>
                    <li><a href="">Criar um usuário</a></li>
                    <li><a href="">Atualizar um usuário</a></li>
                    <li><a href="">Deletar um usuário</a></li>
                    <li><a href="">Fazer login</a></li>
                </ul>
            </menu>
        </aside>
        <main>
            <h2 id="description">Descrição</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro corporis a veritatis dolor nobis
                tenetur reiciendis recusandae sunt vitae quibusdam, non odit magnam error aliquam quo enim mollitia ut.
            </p>

            <h2>Documentação da API</h2>

            <!-- sessão de requisição -->

            <h3 id="userlist">Exemplo de Requisição GET para listar todos os usuários:</h3>
            <section class="apicall">
                <abbr title="método"><h4>GET</h4></abbr>
                <p>/api/users</p>
            </section>

            <h5>Exemplo de retorno da rota:</h5>
            <pre>
                <code>
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "_id": 1,
        "userName": "João",
        "email": "joao@example.com"
    },
    {
        "_id": 2,
        "userName": "Maria",
        "email": "maria@example.com"
    }
]
                </code>
            </pre>

            <h5>Tipagem do retorno:</h5>
            <section class="types">
                <span>
                    <h4>_id:</h4>
                    <p>number</p>
                </span>
                <span>
                    <h4>userName:</h4>
                    <p>string</p>
                </span>
                <span>
                    <h4>email:</h4>
                    <p>string</p>
                </span>
            </section>

            <!-- sessão de requisição -->

            <h3 id="user">Exemplo de Requisição GET para listar um usuário:</h3>
            <section class="apicall">
                <abbr title="método"><h4>GET</h4></abbr>
                <p>/api/user/{id}</p>
            </section>

            <h5>Exemplo de retorno da rota:</h5>
            <pre>
                <code>
HTTP/1.1 200 OK
Content-Type: application/json

{
    "_id": 1,
    "userName": "João",
    "email": "joao@example.com"
}
                </code>
            </pre>

            <h5>Tipagem do retorno:</h5>
            <section class="types">
                <span>
                    <h4>_id:</h4>
                    <p>number</p>
                </span>
                <span>
                    <h4>userName:</h4>
                    <p>string</p>
                </span>
                <span>
                    <h4>email:</h4>
                    <p>string</p>
                </span>
            </section>

            <!-- Adicione aqui mais exemplos de chamadas de API conforme necessário -->
        </main>
    </body>
</html>

`
