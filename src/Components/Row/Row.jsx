import Status from '../Status/Status';

function Row() {
    return (
        <div class="bg-zinc-700 py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8">
                    <div>
                        <h2 class="text-indigo-500 text-xl md:text-2xl font-bold">Website</h2>
                        <p class="text-gray-600">194.188.22.19</p>
                    </div>
                    <div class="flex flex-row">
                        
                    </div>

                    <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Eliminar</a>
                </div>
            </div>
        </div>
    );
}

export default Row;