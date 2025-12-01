package richard.demo;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Arrays;

public class APIcall {

    public String choice; // carros, motos, caminhoes
    public String chooseKind = "https://parallelum.com.br/fipe/api/v1/%s/marcas";

    Gson gson = new GsonBuilder().create();
    JsonElement brandsJson;

    Data[] marcas;
    Modelos modelos;
    Data[] anos;

    String brandCodeSelected;
    String modelCodeSelected;

    public String requestAPI(String urlString) {
        try {
            URL url = new URL(urlString);
            HttpClient client = HttpClient.newHttpClient();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(url.toURI())
                    .GET()
                    .build();

            HttpResponse<String> response = client.send(
                    request,
                    HttpResponse.BodyHandlers.ofString());

            brandsJson = gson.fromJson(response.body(), JsonElement.class);

            return response.body();

        } catch (Exception e) {
            System.out.println("Erro ao chamar API: " + e.getMessage());
            return null;
        }
    }

    void organizeData(String tipo){
        switch (tipo) {
            case "marcas" -> {
                marcas = gson.fromJson(brandsJson, Data[].class);
                Arrays.stream(marcas)
                        .map(m -> m.nome)
                        .forEach(System.out::println);
            }

            case "modelos" -> {
                modelos = gson.fromJson(brandsJson, Modelos.class);
                modelos.modelos.stream()
                        .map(m -> m.nome)
                        .forEach(System.out::println);
            }

            case "anos" -> {
                anos = gson.fromJson(brandsJson, Data[].class);
                Arrays.stream(anos)
                        .forEach(a -> System.out.println(a.nome));
            }

            default -> System.out.println("Tipo inválido.");
        }
    }

    public void escolherMarca(String nomeMarca){
        for (Data m : marcas) {
            if (m.nome.toLowerCase().contains(nomeMarca)) {
                solicitarModelos(m.codigo);
                return;
            }
        }
        System.out.println("Marca não encontrada.");
    }

    public void solicitarModelos(String brandCode){
        brandCodeSelected = brandCode;

        String url = "https://parallelum.com.br/fipe/api/v1/%s/marcas/%s/modelos"
                .formatted(choice, brandCode);

        requestAPI(url);

        organizeData("modelos");
    }

    public void escolherModelo(String nomeModelo){
        for (Data m : modelos.modelos) {
            if (m.nome.toLowerCase().contains(nomeModelo)) {
                solicitarAnos(m.codigo);
                modelCodeSelected = m.codigo;
                return;
            }
        }
        System.out.println("Modelo não encontrado.");
    }

    public void solicitarAnos(String modelCode){
        String url = "https://parallelum.com.br/fipe/api/v1/%s/marcas/%s/modelos/%s/anos"
                .formatted(choice, brandCodeSelected, modelCode);

        requestAPI(url);

        organizeData("anos");
    }

    public void escolherAno(String nomeAno){
        for (Data a : anos) {
            if (a.nome.toLowerCase().contains(nomeAno)) {
                solicitarValor(a.codigo);
                return;
            }
        }
        System.out.println("Ano não encontrado.");
    }

    public void solicitarValor(String yearCode){
        String url = "https://parallelum.com.br/fipe/api/v1/%s/marcas/%s/modelos/%s/anos/%s"
                .formatted(choice, brandCodeSelected, modelCodeSelected, yearCode);

        String response = requestAPI(url);

        Veiculo veiculo = gson.fromJson(response, Veiculo.class);
        System.out.println(veiculo);
    }
}
