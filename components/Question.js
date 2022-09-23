import Link from 'next/link';
import parseTime from '../public/static/ParseTime'

export default function Question({ username, title, content, updated, id, level }) {

  const passedTime = parseTime(updated);

  return (
    <div className='w-3/4 mx-auto'>
      <Link href={{
        pathname: `/question/${id}`,
      }}>
        <a>
          <div className="mt-4 shadow p-3 bg-white flex">
            <div class="p-3">
              <img src="https://www.pngrepo.com/download/2880/chat-bubbles-with-ellipsis.png" class="w-12" />
            </div>
            <div class="flex items-stretch flex-1 pl-2">
              <div class="self-center leading-tight">
                <span class="font-bold">{title}</span><br />
                <span class="text-gray-700 text-sm">
                  {content}
                </span>
              </div>
            </div>
            <div class="flex items-stretch">
              <div class="self-center flex">
                <img
                  src="https://www.pngrepo.com/download/2880/chat-bubbles-with-ellipsis.png"
                  class="w-10 rounded-full"
                />
                <div class="leading-none text-sm self-center pl-2 pr-4">
                  Course: {level}<br />
                  <span class="text-xs text-gray-600">
                    by {username} &bull; {passedTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}