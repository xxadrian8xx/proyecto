package iesvdm.adrian.proyecto.controller;

import iesvdm.adrian.proyecto.domain.Partido;
import iesvdm.adrian.proyecto.domain.Usuario;
import iesvdm.adrian.proyecto.service.PartidoService;
import iesvdm.adrian.proyecto.service.UsuarioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/partidos")
@CrossOrigin
public class PartidoController {
    private final PartidoService partidoService;

    public PartidoController(PartidoService partidoService) {
        this.partidoService = partidoService;
    }

    @GetMapping(value = {"","/"})
    public List<Partido> all() {
        return this.partidoService.all();
    }

    @PostMapping({"","/"})
    public Partido newPartido(@RequestBody Partido partido) {
        return this.partidoService.save(partido);
    }

    @GetMapping("/{id}")
    public Optional<Partido> one(@PathVariable("id") Long id) {
        return this.partidoService.one(id);
    }

    @PutMapping("/{id}")
    public Optional<Partido> replaceProduct(@PathVariable("id") Long id, @RequestBody Partido partido) {
        return this.partidoService.replace(id, partido);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") Long id) {
        this.partidoService.delete(id);
    }
}
