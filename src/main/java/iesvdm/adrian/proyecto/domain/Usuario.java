package iesvdm.adrian.proyecto.domain;

import jakarta.persistence.*;
import lombok.*;
import iesvdm.adrian.proyecto.domain.Partido;

import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(of = "id")
@Builder
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long id;

    private String nombre;

    private String apellido1;

    private String apellido2;

    private String usuario;

    private String password;

    private String email;

    private String telefono;

    @ManyToOne
    private Equipo equipo;
}
