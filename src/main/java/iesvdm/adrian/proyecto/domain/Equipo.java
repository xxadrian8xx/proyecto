package iesvdm.adrian.proyecto.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(of = "id")
@Builder
@Table(name = "equipo")
public class Equipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_equipo")
    private Long id;

    private String nombre;

    @Lob
    private String logo;

    private final String sin_foto = "";

    private String descripcion;

    @JoinTable(
            name = "partido_equipos",
            joinColumns = @JoinColumn(name = "FK_EQUIPO", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "FK_PARTIDO", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Partido> historial;

    @OneToMany(mappedBy = "equipo")
    private List<Usuario> jugadores;
}
