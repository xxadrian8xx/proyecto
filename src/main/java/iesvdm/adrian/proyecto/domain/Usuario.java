package iesvdm.adrian.proyecto.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import iesvdm.adrian.proyecto.domain.Partido;

import java.util.ArrayList;
import java.util.Collection;

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

    @NotBlank
    private String nombre;

    @NotBlank
    private String apellido1;

    @NotBlank
    private String apellido2;

    @NotBlank
    private String usuario;

    @NotBlank
    private String password;

    private String rol;

    @Email
    private String email;

    @Size(min = 9, max = 9)
    private String telefono;
    @JsonIgnore
    @ManyToOne
    private Equipo equipo;

}
