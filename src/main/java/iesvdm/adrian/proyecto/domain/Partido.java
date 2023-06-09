package iesvdm.adrian.proyecto.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(of = "id")
@Builder
@Table(name = "partido")
public class Partido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_partido")
    private Long id;

    private Date fecha;

    private int[] resultado = new int[2];

    @ManyToOne
    private Equipo Local;

    @ManyToOne
    private Equipo Visitante;

    @ManyToOne
    private Torneo torneo;

}