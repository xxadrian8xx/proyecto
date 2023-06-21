package iesvdm.adrian.proyecto.controller;

import iesvdm.adrian.proyecto.domain.Equipo;
import iesvdm.adrian.proyecto.domain.Usuario;
import iesvdm.adrian.proyecto.exceptions.ResourceNotFoundException;
import iesvdm.adrian.proyecto.service.EquipoService;
import iesvdm.adrian.proyecto.service.UsuarioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/equipos")
@CrossOrigin
public class EquipoController {
    @Autowired
    private final EquipoService equipoService;


    public EquipoController(EquipoService equipoService) {
        this.equipoService = equipoService;
    }

    @GetMapping(value = {"","/"})
    public List<Equipo> all() {
        return this.equipoService.all();
    }

    @PostMapping({"","/"})
    public Equipo newTorneo(@RequestBody Equipo equipo) {
        return this.equipoService.save(equipo);
    }

    @GetMapping("/detail/{id}")
    public Optional<Equipo> one(@PathVariable("id") Long id) throws ResourceNotFoundException {
        return this.equipoService.one(id);
    }

    @PutMapping("/{id}")
    public Optional<Equipo> replaceProduct(@PathVariable("id") Long id, @RequestBody Equipo equipo) {
        return this.equipoService.replace(id, equipo);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") Long id) {
        this.equipoService.delete(id);
    }

}
