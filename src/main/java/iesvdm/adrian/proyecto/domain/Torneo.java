package iesvdm.adrian.proyecto.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(of = "id")
@Builder
@Table(name = "torneo")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Torneo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_torneo")
    private Long id;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate fecha_inicio;

    private String nombre;

    private Deporte deporte;

    private int tamaño;

    private String nivel;

    @JsonIgnore
    @JoinTable(
            name = "rel_torneo_equipo",
            joinColumns = @JoinColumn(name = "ID_Torneo", nullable = false),
            inverseJoinColumns = @JoinColumn(name="ID_Equipo", nullable = false)
    )
    @ManyToMany
    private List<Equipo> equipos;


    @OneToMany(mappedBy = "torneo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Partido> partidos;
}
