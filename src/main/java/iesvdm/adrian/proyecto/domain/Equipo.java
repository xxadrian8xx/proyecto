package iesvdm.adrian.proyecto.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(of = "id")
@Builder
@Table(name = "equipo")
public class Equipo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_equipo")
    private Long id;
    @NotEmpty
    private String nombre;

    @Lob
    private String logo;

    @NotEmpty
    private String descripcion;

    @OneToMany(mappedBy = "equipo")
    private List<Usuario> jugadores;

    @JsonIgnore
    @ManyToMany(mappedBy = "equipos")
    private List<Torneo> torneosInscrito;
}
