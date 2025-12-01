package richard.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class ExercicioApplication implements CommandLineRunner {


    APIcall apiCall = new APIcall();

	public static void main(String[] args) {
		SpringApplication.run(ExercicioApplication.class, args);
	}


    @Override
    public void run(String... args) throws Exception {
        System.out.println("""
                ================================
                |   Consulta de Preços FIPE    |
                ================================
                Opções:
                Carros
                Motos
                Caminhões
                """);

        Scanner sc = new Scanner(System.in);
        String choice = sc.nextLine().toLowerCase();
        if(choice.isEmpty()){
            System.out.println("Opção inválida. Encerrando o programa.");
            return;
        }
        else if(choice.contains("car")){
            choice = "carros";
        }
        else if(choice.contains("mo")){
            choice = "motos";
        }
        else if(choice.contains("cam")){
            choice = "caminhoes";
        }
        else{
            System.out.println("Opção inválida. Encerrando o programa.");
            return;
        }

        apiCall.choice = choice;

        System.out.println("""
                ================================
                |       Marcas Disponíveis      |
                ================================
                
                """);

        chooseKind(choice);

        System.out.println("""
                ================================
                |    Escolha uma Marca Acima    |
                """);
        String brandChoice = sc.nextLine().toLowerCase();
        apiCall.escolherMarca(brandChoice);

        System.out.println("""
                ================================
                |    Escolha um Modelo Acima    |
                """);
        String modelChoice = sc.nextLine().toLowerCase();
        chooseModel(modelChoice);

        System.out.println("""
                ================================
                |     Escolha um Ano Acima      |
                """);
        String yearChoice = sc.nextLine().toLowerCase();
        apiCall.escolherAno(yearChoice);
    }

    void chooseKind(String choice){
        apiCall.chooseKind = apiCall.chooseKind.formatted(choice);
        String response = apiCall.requestAPI(apiCall.chooseKind);
        apiCall.organizeData("marcas");
    }
    void chooseModel(String name){
        apiCall.escolherModelo(name);
    }
}
