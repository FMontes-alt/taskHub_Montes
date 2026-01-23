// 1. Importamos el Hook useState
import { useState } from 'react';
 
export default function Welcome() {
    const nombreUsuario = "Sergio Montes";
    const LIMITE = 10;
    
    // 2. Definimos el estado: [valor, función_para_cambiarlo]
    // Inicializamos con el array de tareas que ya teníamos
    const [tareas, setTareas] = useState([
        "Instalar Laravel", 
        "Configurar React", 
        "Aprender Tailwind"
    ]);
    
    // Definimos el estado del contador
    const [contador, setContador] = useState(3); // No lo pono en 0 por que entiendo que el contador empieza en 3 por que hay ya 3 tareas si no un 0 y se pondria en rojo cuando llegue a 13
    const bloqueado = contador >= LIMITE;
    
    // 3. Función para añadir una tarea nueva
    const añadirTarea = () => {
        const nueva = "Nueva tarea de prueba " + (tareas.length + 1);
        
        // IMPORTANTE: En React no usamos .push(). 
        // Creamos un nuevo array con las antiguas + la nueva.
        setTareas([...tareas, nueva]);

        // Incrementar el contador en 1
        setContador(contador + 1);
    };
 
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-black text-indigo-600 uppercase">
                TaskHub de {nombreUsuario}
            </h1>
 
            <div className="mt-8 w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-slate-800">Tareas ({tareas.length}):</h2>
                
                <ul className="space-y-3">
                    {tareas.map((tarea, index) => (
                        <li key={index} className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                            {tarea}
                        </li>
                    ))}
                </ul>
            </div>
 
            <div className="mt-10">
                {/* 4. Conectamos la función al evento onClick */}
                <button 
                    onClick={añadirTarea}
                    disabled={bloqueado}
                    className={`px-6 py-2 rounded-lg shadow-md transition active:scale-95 ${
                        bloqueado ? "bg-red-500 text-white cursor-not-allowed" : "bg-indigo-500 text-white cursor-pointer"
                    }`}
                >
                    <p> {bloqueado ? "¡Lista Llena!" : "Añadir tarea"}</p>
                </button>
            </div>
        </div>
    );
}