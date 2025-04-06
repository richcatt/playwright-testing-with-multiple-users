using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseHttpsRedirection();

// Sign in endpoint
app.MapPost("api/signin", (UserForm userForm) =>
    {
        var fileStream = File.OpenRead("../testData.json");

        var users = JsonSerializer.Deserialize<IEnumerable<TestUser>>(fileStream);

        return users?.FirstOrDefault(user => user.username == userForm.username);
    })
    .WithName("SignIn")
    .DisableAntiforgery();

app.Run();

record UserForm(
    string username);

record TestUser(
    string name,
    string description,
    string username,
    IEnumerable<string> permissions);
