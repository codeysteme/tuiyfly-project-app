#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["src/Api/TuiFly.FlySearchApi.Api.csproj", "src/Api/"]
COPY ["src/Domain/TuiFly.FlySearchApi.Domain.csproj", "src/Domain/"]
COPY ["src/Infrastructure/TuiFly.FlySearchApi.Infrastructure.csproj", "src/Infrastructure/"]
RUN dotnet restore "src/Api/TuiFly.FlySearchApi.Api.csproj"
COPY . .
WORKDIR "/src/src/Api"
RUN dotnet build "TuiFly.FlySearchApi.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TuiFly.FlySearchApi.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TuiFly.FlySearchApi.Api.dll"]