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
@Table(name = "torneo")
public class Torneo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_torneo")
    private Long id;

    private Date fecha_inicio;

    private Deporte deporte;

    private int tamaño;

    private String nivel;

    @JoinTable(
            name = "rel_torneo_equipo",
            joinColumns = @JoinColumn(name = "ID_Torneo", nullable = false),
            inverseJoinColumns = @JoinColumn(name="ID_Equipo", nullable = false)
    )
    @ManyToMany
    private List<Equipo> equipos;

    @OneToMany
    private List<Partido> partidos;
}
