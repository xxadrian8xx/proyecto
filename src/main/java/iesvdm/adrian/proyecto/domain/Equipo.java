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

    @OneToMany(mappedBy = "id")
    List<Partido> historial;

    @OneToMany(mappedBy = "equipo")
    private List<Usuario> jugadores;

    @ManyToMany(mappedBy = "equipos")
    private List<Torneo> torneosInscrito;
}
