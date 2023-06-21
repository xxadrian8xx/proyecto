package iesvdm.adrian.proyecto.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.util.Pair;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(of = "id")
@Builder
@Table(name = "partido")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Partido implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_partido")
    private Long id;

    private Date fecha;

    private int resultadoLocal;

    private int resultadoVisitante;

    private String nombre_local;

    private String nombre_visitante;

    @JsonIgnore
    @ManyToOne
    private Torneo torneo;

}
