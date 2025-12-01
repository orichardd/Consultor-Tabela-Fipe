package richard.demo;

import com.google.gson.annotations.SerializedName;

public record Veiculo(
        @SerializedName("Marca")
        String marca,
        @SerializedName("Modelo")
        String modelo,
        @SerializedName("AnoModelo")
        String anoModelo,
        @SerializedName("Valor")
        String valor,
        @SerializedName("MesReferencia")
        String referencia

) {
    @Override
    public String toString() {
        return """
                ================================
                |        Detalhes do Veículo     |
                ================================
                
                %s %s
                Ano: %s
                Valor fipe: %s
                Mês de referência: %s
                
                ================================
                """.formatted(marca, modelo, anoModelo, valor, referencia);
    }
}
